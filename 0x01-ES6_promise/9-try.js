export default function guardrail(mathFunction) {
  const errorqueue = [];
  try {
    errorqueue.push(mathFunction());
  } catch (error) {
    errorqueue.push(String(error));
  }
  errorqueue.push('Guardrail was processed');
  return errorqueue;
}
