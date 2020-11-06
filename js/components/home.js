function home () {
var content = ` 
       <img src="pics/Tart-and-Sweet-Lemon-Poppy-Seed-Muffins-WS-Thumbnail.jpg" class="responsive">
            <h2>Lemon Poppy Seed Muffins</h2>
            <p>
                Here on Dom's Baking Addiction we will be featuring our favorite recipe every week. This week is Lemon Poppy Seed Muffins.
                Down below is our recipe card. Scroll below for information in
            </p>
            <div id="recipe">
                <p>
                    <!-- Lemon Poppy seed baking card-->
                    <strong>   Ingredients</strong> <br>
                    <br>
                    <strong>FOR THE LEMON POPPY SEED MUFFINS: </strong><br>
                    2 1/2 cups all-purpose flour <br>
                    1 cup sugar <br>
                    2 tablespoons poppy seeds <br>
                    1 tablespoon baking powder <br>
                    1/4 teaspoon kosher salt<br>
                    1 tablespoon lemon zest (zest of 1 lemon) <br>
                    1/2 cup unsalted butter, melted<br>
                    1 cup plain Greek yogurt* <br>
                    1/4 cup milk<br> 
                    2 eggs, large<br>
                    3 tablespoons lemon juice (juice of 1 lemon) <br>
                    1 teaspoon lemon extract<br> 
                    <br>
                    <strong> FOR THE LEMON GLAZE: </strong><br>
                    1 1/2 cups powdered sugar <br>
                    3 tablespoons lemon juice (juice of 1 lemon)<br>
                    <br>
                    <strong>US CUSTOMARY - METRIC<br> 
                        Instructions<br>
                        TO MAKE THE LEMON POPPY SEED MUFFINS:</strong><br>
                    Preheat the oven to 425 degrees F, and line a muffin pan with papers. <br>
                    Place the flour, sugar, poppy seeds, baking powder, salt, and lemon zest in a large mixing bowl, and whisk to combine. <br>
                    Melt the butter in a large liquid measuring cup, and whisk together with the Greek yogurt, milk, eggs, lemon juice, and lemon extract. <br>
                    Pour the liquid ingredients into the dry, and fold together until just barely combined (batter will be very thick). <br>
                    Divide the batter equally between all 12 wells of the muffin pan. <br>
                    Bake the muffins for 5 minutes at 425 degrees F, then turn the oven temperature down to 350 degrees F and continue to bake for 14 to 18 minutes, or until a toothpick inserted in the thickest part of a muffin comes out clean or with a few moist crumbs. <br>
                    Drizzle with lemon glaze and serve.  <br>
                    <br>
                    <strong>   TO MAKE THE LEMON GLAZE: </strong> <br>
                    Place the powdered sugar in a medium bowl, and stir in the lemon juice, a little at a time, until the desired consistency is achieved. <br>
                </p>
            </div>
            <!-- recipe div ends here-->
            <p>
                <a href="https://www.youtube.com/watch?v=KI6aYnAkO4k&feature=emb_title">Video Recipe for Lemon Poppy Seed Muffins</a>
            </p>
    <h2> Purpose of Website </h2>
            <p>
                The purpose of my website is to provide the users of its creative recipes every week 
                that I bake myself. As well as past recipes that I found were crowd favorites. In 
                addition, on the blog portion of the website, the users will be able to post their own recipes 
                and ideas. My goal is to build a community for all bakers. Simply enough, the way to entice viewers 
                is by making popular food items and have them visit the website to learn how to bake them themselves.
            </p>
    `;
        var ele = document.createElement("div");
        ele.innerHTML = content;
        return ele;
        }