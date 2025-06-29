interface TemplateDetailProps {
  params: {
    templatesid: string;
  };
}

export default function TemplateDetail({ params }: TemplateDetailProps) {
  const { templatesid } = params;

  return (
    <div>
      <h1>Template Detail</h1>
      <p>Details for template ID: {templatesid}</p>
    </div>
  );
}
