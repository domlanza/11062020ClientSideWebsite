function blog() {
var content = ` 
    <h2> Web Design Experience </h2>
     <p>
        My web development experience is intermediate. 
        I have interned for a company specializing in web 
        development. I used a framework called 
        Laravel. The company interned for would assign me projects
        to style and edit different themes.
      </p>
    <h2> Proposed Database Design </h2>
      <p>
        <br>
         Recipe Blog Table
         <ul>
          <li>Primary Key (Every recipe posted)</li>
          <li>username(Foreign Key)</li>
          <li>date</li>
          <li>time</li>
          <li>recipe</li>
          <li>photo(optional)</li>
         </ul>  
      </p>
     <h2> HomePage Homwork Blog </h2>
      <p> The HomePage Homework assignment I really enjoyed.
          I thought it had just enough content to work on and
          everything was taught clearly. With that being said,
          something valuable I have learned during that assignment
          is how important it is to have reusable code and
          to program in a way that is easy to understand.
          In earlier classes of mine I would program in a very
          pen to paper style where I would just write as much as I can
          to figure out the issue. This assignment has made
          me change my approach to programming.
        </p>
    <h2> JavaScript UI Blog </h2>
           <p> I thought this homework assignment was very challenging.
           If I may be honest. There was not a lot of work to do.
           But in a way it felt like a lot of information to understand.
           Quite honestly, I was very frustrated doing this assignment
           because of the dropdown menu. To have a responsive
           navigation bar where you can click out of it anywhere
           was very difficult for me to create. I kept working at
           it and eventually did get it to work. It taught me
           to really feel my emotions and sometimes to take a
           step back from my work. With that being said, I also
           learned routing and how beneficial it is to not simply
           call different links in your page using the copy and paste
           method showed in the first tutorial. I am liking how
           my website is coming along.
        </p>
        <h2> "Object Oriented" JavaScript (no jQuery) </h2>
        <p>
            This assignment was difficult but nonetheless. I completed it.
            Js Object will direct you to two pages and the hover will multiply
            the calories by 0.25. You also can change the name, calories, 
            and amount of cookies.
        </p>
    <h2> HW04: Advanced JS (Slide Show Component)  </h2>
        <p>
            Homework Assignment 04 is the slide show homework using AJAX and
            javascript. This assignment was built up from the lab and quite honestly
            served me a bit of confusion making a public method. I went to office 
            hours and Professor Kyvernitis assisted me in creating an object array
            as well as an optional property. Issues regarding my routing were also
            ironed out. I am glad I went to office hours and got assistance.
        </p>
    <h2> HW05: JS Component (Click Sortable Table)</h2>
        <p>
            Homework Assignment 05 is the click sortable table using AJAX and JSON files.
            I thought I grasped the information pretty well in the lab and that seemed to
            be the case when writing this code. With that being said, I keep running into
            routing errors. Instead of walking away from my website. I kept perservering
            and continued pressing to complete the HW. Before I realized I finished and
            satisfied all the requirements.
        </p>
    
    <h2> HW06: Tutorial Proposal</h2>
        <p>
            Homework Assignment 06 is the tutorial proposal. This homework was pretty straight
            forward. All we were asked to do was just write a proposal and create a page on in
            your navigation bar. All in all this was a pretty straight forward homework.
        </p>
    
     <h2> HW07: Database</h2>
        <p>
            Homework Assignment 07 is the database homework. This homework for me was 
            straight forward but there was a lot of error handling. Creating that foreign key
            gave me a plethora of issues that I did seem to expect. But gladly I resolved them
            with a little help from classmates and stack overflow. With all things considered 
            this homework was short (which I am so grateful). My pdf is provided below:
        <br><a target="_blank" href = "Lanza_Database (1).pdf">Homework 07: Database</a>

        </p>
    
    
    <h2> HW08: WEB_API</h2>
        <p>
            Homework Assignment 08 is the creation of the user and other API tables. This 
            consisted of writing javascript as server side database code. Which helped
            further drive the concept of writing proper SQL statements. The majority of the
            leg work of this assignment is understanding how to reference and properly
            name variables, functions, and files. I was able to join Professor's office
            hours where she straightened out a few of my errors. Once I left the office
            session I eventually completed the homework assignement.
            this homework was short (which I am so grateful). My pdf is provided below:
        <br> Click <a href = "webAPIs/listOthersAPI.jsp"> for the Web API that lists data from my Recipe Table</a>
        <br> Click <a href = "webAPIs/listUsersAPI.jsp"> for the Web API that lists users from my Database</a>
        <br> Click <a href = "LANZA_HW8_DBErrors.docx"> here for Homework 08: Word Documnet with errors</a>

        </p>
    
    
     <h2> HW09: React Intro</h2>
        <p>
            Homework Assignment 09 was a short assignment where we had to use React to display
            our user table and recipe table. This built off of our the lab from last week. Introducing
            us to React. This assignment was difficult. I could give a few reasons as to why but truly
            I felt unfocused and unmotivated this week in school and frankly burnout. I think that's
            why this homework was so difficult for me. But I powered through and carried on with
            the help of TA and a few classmates. Thank you guys.
      
        </p>
        

    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
}