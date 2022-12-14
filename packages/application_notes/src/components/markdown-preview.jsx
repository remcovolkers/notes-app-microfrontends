import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ReactMarkdown from "react-markdown";

export default function MarkdownPreview({ showText }) {
  return (
    <Col>
      <Card style={{ height: "90vh" }}>
        <Card.Header className="w-100 text-center fs-2 shadow-lg">
          Markdown viewer
        </Card.Header>
        <Card.Body className="bg-secondary h-75 rounded-bottom">
          <ReactMarkdown>{showText}</ReactMarkdown>
        </Card.Body>
      </Card>
    </Col>
  );
}
