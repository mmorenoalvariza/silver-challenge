const getFlag = async () => {
  const resp = await fetch(
    "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/646179"
  );
  const data = await resp.text();
  return data;
};

export default getFlag;
