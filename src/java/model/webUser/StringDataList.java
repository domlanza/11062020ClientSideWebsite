/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.webUser;

import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author dominiclanza
 */
public class StringDataList {

    public String dbError = "";
    public ArrayList<StringData> webUserList = new ArrayList();

    // Default constructor leaves StringDataList objects nicely set with properties 
    // indicating no database error and 0 elements in the list.
    public StringDataList() {
    }

    // Adds one StringData element to the array list of StringData elements
    public void add(StringData stringData) {
        this.webUserList.add(stringData);
    }

    // Adds creates a StringData element from a ResultSet (from SQL select statement), 
    // then adds that new element to the array list of StringData elements.
    public void add(ResultSet results) {
        StringData sd = new StringData(results);
        this.webUserList.add(sd);
    }
}
