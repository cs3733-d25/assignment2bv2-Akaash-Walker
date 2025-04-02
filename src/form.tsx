function Form() {
    return (
        <form>
            <label htmlFor="item">Item:</label>
            <input type="text" id="item" name="item"/>
            <br/>
            <label htmlFor="price">Price:</label>
            <input type="text" id="price" name="price"/>
            <br/>
            <input type="checkbox" id="priceHappy"/>
            <label htmlFor="priceHappy">Happy with the price</label>
            <br/>
            <input type="checkbox" id="driveFar"/>
            <label htmlFor="driveFar">Drove far to get it</label>
            <br/>
            <input type="checkbox" id="sketchySeller"/>
            <label htmlFor="sketchySeller">The seller was sketchy</label>
            <br/>
            <h4>Condition</h4>
            <input type="radio" id="new" name="condition"/>
            <label htmlFor="new">New</label>
            <br/>
            <input type="radio" id="likeNew" name="condition"/>
            <label htmlFor="likeNew">Like New</label>
            <br/>
            <input type="radio" id="good" name="condition"/>
            <label htmlFor="good">Good</label>
            <br/>
            <input type="radio" id="fair" name="condition"/>
            <label htmlFor="fair">Fair</label>
            <br/>
            <input type="radio" id="poor" name="condition"/>
            <label htmlFor="poor">Poor</label>
            <br/>
            <label htmlFor="comments">Anything else interesting about the find?</label>
            <br/>
            <textarea id="comments" cols={30} rows={10}></textarea>
            <br/>
            <label htmlFor="age">How many years old was your item?</label>
            <br/>
            <select name="age" id="age">
                <option value="0-2">0-2 years old</option>
                <option value="3-5">3-5 years old</option>
                <option value="6-10">6-10 years old</option>
                <option value="10+">10+ years old</option>
            </select>
            <br/>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default Form;