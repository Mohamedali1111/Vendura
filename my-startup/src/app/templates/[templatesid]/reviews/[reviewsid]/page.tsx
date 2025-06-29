export default function ReviewDetail({ params }: ReviewDetailProps) {
  const { templatesid, reviewsid } = params;

  return (
    <div>
      <h1>Review Detail</h1>
      <p>Details for review ID: {reviewsid} in template ID: {templatesid}</p>
    </div>
  );
}
interface ReviewDetailProps {
  params: {
    templatesid: string;
    reviewsid: string;
  };
}