

const contact = () => {
  return (
    <div> 
        <h1>
            Contact Us
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
        </p>
        <form action="">
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
        <div>
            <h2>Our Address</h2>
            <p>123 Fashion Street, New York, NY 10001</p>
            <p>+1 (555) 123-4567</p>
        </div>
    </div>
  )
}

export default contact