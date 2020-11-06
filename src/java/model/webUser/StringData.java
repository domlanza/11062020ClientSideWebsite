/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.webUser;

import dbUtils.FormatUtils;
import java.sql.ResultSet;

/**
 *
 * @author dominiclanza
 */
public class StringData {

    public String webUserId = "";
    public String userEmail = "";
    public String userPassword = "";
    public String image = "";
    public String birthday = "";
    public String membershipFee = "";
    public String userRoleId = "";   // Foreign Key
    public String userRoleType = ""; // getting it from joined user_role table.

    public String errorMsg = "";

    // default constructor leaves all data members with empty string (Nothing null).
    public StringData() {
    }

    // overloaded constructor sets all data members by extracting from resultSet.
    public StringData(ResultSet results) {
        try {
            // plainInteger returns integer converted to string with no commas.
            this.webUserId = FormatUtils.plainInteger(results.getObject("web_user_id"));
            this.userEmail = FormatUtils.formatString(results.getObject("user_email"));
            this.userPassword = FormatUtils.formatString(results.getObject("user_password"));
            this.image = FormatUtils.formatString(results.getObject("image"));
            this.birthday = FormatUtils.formatDate(results.getObject("birthday"));
            this.membershipFee = FormatUtils.formatDollar(results.getObject("membership_fee"));
            this.userRoleId = FormatUtils.plainInteger(results.getObject("web_user.user_role_id"));
            this.userRoleType = FormatUtils.formatString(results.getObject("user_role_type"));
        } catch (Exception e) {
            this.errorMsg = "Exception thrown in model.webUser.StringData (the constructor that takes a ResultSet): " + e.getMessage();
        }
    }

    public int getCharacterCount() {
        String s = this.webUserId + this.userEmail + this.userPassword + this.image + this.birthday
                + this.membershipFee + this.userRoleId + this.userRoleType;
        return s.length();
    }

    public String toString() {
        return "Web User Id:" + this.webUserId
                + ", User Email: " + this.userEmail
                + ", User Password: " + this.userPassword
                + ", Image: " + this.image
                + ", Birthday: " + this.birthday
                + ", Membership Fee: " + this.membershipFee
                + ", User Role Id: " + this.userRoleId
                + ", User Role Type: " + this.userRoleType;
    }
}
