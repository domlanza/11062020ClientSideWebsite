/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.otherTable;

import dbUtils.FormatUtils;
import java.sql.ResultSet;

/**
 *
 * @author dominiclanza
 */
public class StringDataOther {

    public String recipeId = "";
    public String recipeName = "";
    public String recipeImg = "";
    public String Rating = "";
    public String CostToCreate = "";
    public String webUserId = "";   // Foreign Key
    public String userEmail = "";
//    public String userRoleType = ""; // getting it from joined user_role table.

    public String errorMsg = "";

    // default constructor leaves all data members with empty string (Nothing null).
    public StringDataOther() {
    }

    // overloaded constructor sets all data members by extracting from resultSet.
    public StringDataOther(ResultSet results) {
        try {
            // plainInteger returns integer converted to string with no commas.
            this.recipeId = FormatUtils.plainInteger(results.getObject("recipe_id"));
            this.recipeName = FormatUtils.formatString(results.getObject("recipe_name"));

            // String sql = "SELECT recipe_id, recipe_name, recipe_img, recipe_rating, recipe_timeToCreate, web_user.web_user_id "+
            //"FROM Recipe_other, web_user where web_user.web_user_id = Recipe_other.web_user_id " + 
            this.recipeImg = FormatUtils.formatString(results.getObject("recipe_img"));
            this.Rating = FormatUtils.plainInteger(results.getObject("recipe_rating"));
            this.CostToCreate = FormatUtils.formatDollar(results.getObject("recipe_CostToCreate"));
            this.webUserId = FormatUtils.plainInteger(results.getObject("web_user_id"));
            this.userEmail = FormatUtils.formatString(results.getObject("user_email"));
//            this.userRoleId = FormatUtils.plainInteger(results.getObject("web_user.user_role_id"));
//            this.userRoleType = FormatUtils.formatString(results.getObject("user_role_type"));
        } catch (Exception e) {
            this.errorMsg = "Exception thrown in model.otherTable.StringDataOther (the constructor that takes a ResultSet): " + e.getMessage();
        }
    }

//    public int getCharacterCount() {
//        String s = this.recipe_id + this.recipe_name, this.
////        + this.userPassword + this.image + this.birthday
////                + this.membershipFee + this.userRoleId + this.userRoleType;
//        return s.length();
//    }
    public String toString() {
        return "recipe_id:" + this.recipeId
                + ",recipe_name: " + this.recipeName
                 + ",recipe_img: " + this.recipeImg
                + ", recipe_rating: " + this.Rating
                + ", recipe_CostToCreate: " + this.CostToCreate
                + ", web_user_id: " + this.webUserId
                + ", user_email: " + this.userEmail;

    }
}
