function Form2() {
    return (
        <form>
            <p>Full Name <input type="text" value="" /></p>

            <p>Proficiency</p>
            <input type="radio" id="Beginner" name="Proficiency" value="Beginner" />
            <label htmlFor="Beginner">Beginner</label><br />
            <input type="radio" id="Advanced" name="Proficiency" value="Advanced" />
            <label htmlFor="Advanced">Advanced</label><br />
            <input type="radio" id="Master" name="Proficiency" value="Master" />
            <label htmlFor="Master">Master</label>

            <p>Styles you would like to learn/improve upon</p>
            <input type="checkbox" id="Picking" name="Picking" value="Picking" />
            <label htmlFor="Picking">Picking</label><br />
            <input type="checkbox" id="Finger Picking" name="Finger Picking" value="Finger Picking" />
            <label htmlFor="Finger Picking">Finger Picking</label><br />
            <input type="checkbox" id="Slide" name="Slide" value="Slide" />
            <label htmlFor="Slide">Slide</label><br />
            <input type="checkbox" id="Chords" name="Chords" value="Chords" />
            <label htmlFor="Chords">Chords</label><br />
            <input type="checkbox" id="Tapping" name="Tapping" value="Tapping" />
            <label htmlFor="Tapping">Tapping</label><br />

            <br />

            <label htmlFor="Time">Please select a time that works for you</label>
            <select name="Time" id="Time">
                <option value="11am">11am</option>
                <option value="1pm">1pm</option>
                <option value="4pm">4pm</option>
                <option value="8pm">8pm</option>
            </select>

            <br />

            <br />
            <label htmlFor="notes">Notes</label> <br />
            <textarea id="notes" name="notes">Please leave any questions/comments/concerns here.</textarea>

            <br />
            <button type="submit">Submit</button>
        </form>

    );
}

export default Form2;