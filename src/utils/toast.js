import { toast } from 'react-toastify';

const toastIdsEnum = {};

const createToastNotifier =
  (symbol) =>
  (message, { toastId, ...otherOptions } = {}) => {
    const toastMessage = `${symbol ? `${symbol} ` : ''}${message}`;

    if (!toastId) {
      toast(toastMessage);
    } else {
      if (!toastIdsEnum[toastId]) {
        toastIdsEnum[toastId] = true;

        toast(toastMessage, {
          onClose: () => {
            toastIdsEnum[toastId] = false;
            otherOptions.onClose?.();
          },
          ...otherOptions,
        });
      }
    }
  };

export const errorToast = createToastNotifier('⚠️');
export const successToast = createToastNotifier('✔');
export const plainToast = createToastNotifier('');
export const welcomeToast = createToastNotifier('🎉');
