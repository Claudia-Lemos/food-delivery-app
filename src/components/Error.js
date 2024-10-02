import { useRouteError } from "react-router-dom"

const Error = () => {
  const err = useRouteError();
  console.log(err);
  
  return (
    <div>
        <h1>Oops</h1>
        <h2>Looks like something isnt right.</h2>
        <h3>{err.status}: {err.status.text}</h3>

    </div>
  )
}

export default Error