const Error = ({ error }: { error: string }) => {
  return (
    <p className="text-red-50 bg-red-500 inline-flex px-4 py-2 rounded-3xl">
      {error}
    </p>
  );
};

export default Error;
