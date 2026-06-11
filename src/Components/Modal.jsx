import { createPortal } from "react-dom";
import Button from "./Button";

export default function Modal({ children, dialog, btnCaption }) {
  return createPortal(
    <dialog
      ref={dialog}
      className="p-5 backdrop:bg-stone-900/90 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="text-right mt-3">
        <Button>{btnCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
}
