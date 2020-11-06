/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model.otherTable;

import java.sql.ResultSet;
import java.util.ArrayList;

/**
 *
 * @author dominiclanza
 */
public class StringDataListOther {

    public String dbError = "";
    public ArrayList<StringDataOther> otherList = new ArrayList();

    // Default constructor leaves StringDataList objects nicely set with properties 
    // indicating no database error and 0 elements in the list.
    public StringDataListOther() {
    }

    // Adds one StringData element to the array list of StringData elements
    public void add(StringDataOther StringDataOther) {
        this.otherList.add(StringDataOther);
    }

    // Adds creates a StringData element from a ResultSet (from SQL select statement), 
    // then adds that new element to the array list of StringData elements.
    public void add(ResultSet results) {
        StringDataOther sd = new StringDataOther(results);
        this.otherList.add(sd);
    }
}
