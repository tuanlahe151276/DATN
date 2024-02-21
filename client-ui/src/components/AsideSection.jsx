export default function AsideSection({ children, title = "" }) {
  return (
    <section className="mb-5 p-5 bg-white rounded-lg border border-[#dedede]">
      <div className="mt-0 mb-4">
        <span className="text-lg font-bold m-0 p-0">{title}</span>
      </div>
      {children}
    </section>
  );
}
