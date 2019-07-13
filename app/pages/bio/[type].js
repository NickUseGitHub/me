function Type(props) {
  console.log('props', props)

  return 'Type'
}

Type.getInitialProps = async function(ctx) {
  return {
    pathname: ctx.pathname,
    query: ctx.query,
  }
}

export default Type
