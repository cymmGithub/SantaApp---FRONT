interface Options {
  method: string;
  headers: {
    "Content-Type": string;
  };
  body?: string;
}

export async function fetchData(endpoint: string, options?: Options) {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/${endpoint}`,
    options
  );

  if ([400, 500].includes(res.status)) {
    const error = await res.json();
    alert(`Error occurred. ${error.message}`);
  }
  return res;
}
