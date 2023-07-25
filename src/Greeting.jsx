function Greeting({ name, age }) {
    console.log(name)
    return <>
        <p>FR: Bonjour{name ? `, ${name}` : ""}!</p>
        <p>ES: Hola, {age}!</p>
      </>
}

  export default Greeting