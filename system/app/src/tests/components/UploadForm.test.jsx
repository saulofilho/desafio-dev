import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import UploadForm from '../../components/UploadForm';
import { uploadTransactions } from '../../api/transactions';

vi.mock('../../api/transactions', () => ({
  uploadTransactions: vi.fn(),
}));

describe('UploadForm', () => {
  it('should display alert if no file is selected', async () => {
    const alertMock = vi.fn();

    global.alert = alertMock;

    render(<UploadForm onUploadSuccess={vi.fn()} />);

    fireEvent.click(screen.getByText('Enviar'));

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith('Selecione um arquivo');
    });

    alertMock.mockRestore();
  });

  it('should call the upload function and onUploadSuccess when the upload is successful', async () => {
    uploadTransactions.mockResolvedValueOnce('Upload bem-sucedido');

    const onUploadSuccessMock = vi.fn();

    render(<UploadForm onUploadSuccess={onUploadSuccessMock} />);

    const file = new Blob(['file content'], { type: 'text/plain' });
    const input = screen.getByLabelText('Enviar arquivo');

    fireEvent.change(input, { target: { files: [file] } });
    fireEvent.click(screen.getByText('Enviar'));

    await waitFor(() => {
      expect(uploadTransactions).toHaveBeenCalledWith(file);
      expect(window.alert).toHaveBeenCalledWith(
        'Upload realizado com sucesso!'
      );
      expect(onUploadSuccessMock).toHaveBeenCalled();
    });

    vi.clearAllMocks();
  });

  it('should display an error alert if the upload fails', async () => {
    uploadTransactions.mockRejectedValueOnce(new Error('Erro no upload'));

    const onUploadSuccessMock = vi.fn();

    render(<UploadForm onUploadSuccess={onUploadSuccessMock} />);

    const file = new Blob(['file content'], { type: 'text/plain' });
    const input = screen.getByLabelText('Enviar arquivo');

    fireEvent.change(input, { target: { files: [file] } });
    fireEvent.click(screen.getByText('Enviar'));

    await waitFor(() => {
      expect(uploadTransactions).toHaveBeenCalledWith(file);
      expect(window.alert).toHaveBeenCalledWith('Erro ao enviar arquivo');
      expect(onUploadSuccessMock).not.toHaveBeenCalled();
    });

    vi.clearAllMocks();
  });
});
