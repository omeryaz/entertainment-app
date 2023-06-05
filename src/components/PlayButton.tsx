function PlayButton() {
  return (
    <div className="absolute flex items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[110px] h-[40px] rounded-full bg-white/30">
      <svg
        className="inline-block ml-1"
        width="30"
        height="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
          fill="#FFF"
        />
      </svg>{" "}
      <p className="inline-block ml-5">Play</p>
    </div>
  );
}

export default PlayButton;
