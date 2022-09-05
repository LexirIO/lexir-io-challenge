interface Props {
  details: string;
}

function ProductDetails({ details }: Props) {
  const paragraphs = details.split("\\n"); // Separate the paragraphs
  const renderedParagraphs = paragraphs.map((para, i) => {
    return (
      <div key={i}>
        <p>{para}</p>
        <br />
      </div>
    );
  });

  return (
    <div>
      <h3 className="mb-8 text-2xl font-bold ">Product Details</h3>
      <div className="flex flex-col w-productDetails">{renderedParagraphs}</div>
    </div>
  );
}

export default ProductDetails;
