/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package view;

import dbUtils.DbConn;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import model.otherTable.*;

/**
 *
 * @author dominiclanza
 */
public class OtherTableView {

    public static StringDataListOther getAllUsers(DbConn dbc) {

        //PreparedStatement stmt = null;
        //ResultSet results = null;
        StringDataListOther sdl = new StringDataListOther();
        try {
            String sql = "SELECT recipe_id, recipe_name, recipe_img, recipe_rating, recipe_CostToCreate, web_user.web_user_id, user_email "
                    + "FROM Recipe_other, web_user where web_user.web_user_id = Recipe_other.web_user_id "
                    + "ORDER BY recipe_id ";  // you always want to order by something, not just random order.
            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);
            ResultSet results = stmt.executeQuery();
            while (results.next()) {
                sdl.add(results);
            }//recipe_id, recipe_name,recipe_img,recipe_rating, recipe_timeToCreate, web_user_id
            //select recipe_id, recipe_name, recipe_img, recipe_rating, recipe_timeToCreate, web_user_id
            //
            results.close();
            stmt.close();
        } catch (Exception e) {
            StringDataOther sd = new StringDataOther();
            sd.errorMsg = "Exception thrown in OtherTableView.allUsersAPI(): " + e.getMessage();
            sdl.add(sd);
        }
        return sdl;
    }
}
