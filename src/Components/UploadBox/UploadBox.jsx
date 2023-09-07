function UploaderBox({ imgSrc, isBanner, title }) {
  return (
    <div
      className={`relative flex justify-center border-2 border-[#133141] p-4 before:absolute before:left-[20px] before:top-[-14px] before:bg-white before:px-4 before:content-['${title}'] md:h-[300px] ${
        isBanner && "md:w-[80%]"
      }`}
    >
      <div
        className={` w-[70%] md:w-[95%] ${isBanner && "flex justify-center"}`}
      >
        <img className="h-full max-w-full" src={imgSrc} alt="profile-pic" />
      </div>
      <label
        className="absolute bottom-0 left-0 top-0 z-10 w-full cursor-pointer"
        htmlFor="upload-banner-pic"
      >
        <input
          type="file"
          name="upload-banner-pic"
          id="upload-banner-pic"
          hidden
        />
      </label>
    </div>
  );
}

export default UploaderBox;
