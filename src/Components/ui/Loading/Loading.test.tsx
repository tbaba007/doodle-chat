import { render, screen } from "@testing-library/react"
import Loading from "./Loading"

describe("Loading component", () => {
  test("it should check if the loading text is inside the component ", () => {
    const text = "Loading..."
    render(<Loading />)
    const linkElement = screen.getByText(text)
    expect(linkElement).toBeInTheDocument()
  })
})
