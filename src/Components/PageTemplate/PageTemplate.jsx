function PageTemplate({ children, pageActions }) {
  return (
    <div className=" px-6 py-8">
      <div className="flex h-[500px] flex-col gap-y-12 overflow-x-hidden overflow-y-scroll p-3 sm:p-5">
        {children}
      </div>
      <div className="mt-8 flex justify-center gap-4 bg-[#f6f6f6] p-2 sm:p-4">
        {pageActions}
      </div>
    </div>
  );
}

export default PageTemplate;
