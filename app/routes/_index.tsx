import { Form } from "@remix-run/react";

export default function IndexPage() {
  return (
    <div>
      <p>Hello World</p>
      <Form method='post' action='/logout'>
        <button type='submit'>Logout</button>
      </Form>
    </div>
  );
}
