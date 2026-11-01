function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <p>&copy; {year} Alejandro Melo Flores</p>
    </footer>
  )
}

export default Footer