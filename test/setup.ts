import '@testing-library/jest-dom';

if (!HTMLDialogElement.prototype.showModal) {
  HTMLDialogElement.prototype.showModal = function () {
    this.open = true;
    this.dispatchEvent(new Event('modalopened'));
  };

  HTMLDialogElement.prototype.close = function () {
    this.open = false;
    this.dispatchEvent(new Event('modalclosed'));
  };
}
