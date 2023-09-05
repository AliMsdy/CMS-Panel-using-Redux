function Overlay({ shouldShown, closeHandler }) {
  return (
    <div
      onClick={() => closeHandler(false)}
      className={`${
        shouldShown ? "block" : "hidden"
      } absolute bottom-0 right-0 top-0 z-20 w-full bg-slate-900 opacity-75`}
    ></div>
  );
}

export default Overlay;
