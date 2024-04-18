type ContainerProps={
    children: React.ReactNode
}

const Container = (props:ContainerProps) => {
  return (
    <div className="md:w-[70%] sm:w-[80%] xs:w-[90%] mx-auto py-5">
        {props.children}
    </div>
  )
}

export default Container