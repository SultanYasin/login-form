import React from 'react';
import TestList from '../TestList'


const HTMLFilds = () => {
  return (
    <div>
      <form >
      {/*   <input placeholder="write something" minLength="5" maxLength="15" />
        <br />

        <div>
          <label htmlFor="book">choose a book</label>
          <select id="book" multiple size={2}>
            <optgroup label="group a">
              <option value="1">book 1</option>
              <option value="2">book 2</option>
            </optgroup>
            <optgroup label="group b">
              <option value="4">book 4</option>
              <option value="5">book 5</option>
            </optgroup>
          </select>
        </div> 
        <br />
        <div>
          <input value="Reset" type="reset" />
          <input value={"submit"} type="submit" />
          <br />
          <input type="range" max="10" name="range" step={"2"} value="0"/>
          <input type="number" name="number" min="0" max="10" />
          <br />
          <input type="radio" name="os" value="windows" id="1" />
          <label htmlFor="1">Windows</label><br/>

          <input type="radio" name="os" value="mac" id="2" />
          <label htmlFor="2">Mac</label><br/>

          <input type="radio" name="os" value="linux" id="3" />
          <label htmlFor="3">Linux</label><br/>

          <input name="os" type='radio' value="none" id="4" />
          <label htmlFor="4">none</label>
        </div>
        <br />
        <hr />
        <wbr> makes line breake
        */}
        <div>
          <input id="facebook" name="os" value={"FaceBook"} type="checkbox" />
          <label htmlFor="facebook">Facebook</label>
          <br />
        </div>
        <div>
          <input id="instagram" name="os" value={"instagram"} type="checkbox" />
          <label htmlFor="instagram">Instagram</label> <br />
        </div>
        <div>
          <input id="twitter" value={"twitter"} type="checkbox" name="os" />
          <label htmlFor="twitter">Twitter</label>
        </div>
        <hr />
        <br />
        <div>
          <label>Upload</label>
          <input type="fiel" />
        </div>
        <br />
        <div>
          <label>search</label>
          <input type="search" />
        </div>
        <br />
        <div>
          <label>URL</label>
          <input type="url" />
        </div>
        <br />
        <div>
          <label>Date</label>
          <input type="date" />
        </div>
        <br />
        <div>
          <label>Month</label>
          <input type="month" />
        </div>
        <br />
        <div>
          <label>Time</label>
          <input type="time" />
        </div>
        <br />
        <div>
          <label>local datetime</label>
          <input type="datetime-local" />
        </div> 
        <br/>
        <hr/>
        <br/>
        <TestList />


        <input value="Reset" type="reset" />
        <input value={"submit"} type="submit" />
      <br/>
      </form>
      <br/>
      
    </div>
  );
};

export default HTMLFilds;
