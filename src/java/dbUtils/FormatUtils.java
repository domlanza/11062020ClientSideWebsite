package dbUtils;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *
 * @author dominiclanza
 */
public class FormatUtils {
    // DecimalFormat percentFormat = new DecimalFormat("%###.##");
    // Turns a date into a nicely formatted String.

    public static String formatDate(Object obj) {
        if (obj == null) {
            return "";
        }
        try {
            java.util.Date dateval = (java.util.Date) obj;
            SimpleDateFormat dateformat = new SimpleDateFormat("MM/dd/yyyy");
            dateformat.setLenient(false);
            return dateformat.format(dateval);
        } catch (Exception e) {
            return "bad date in FormatUtils.formatDate: " + obj.toString() + " error: " + e.getMessage();
        }
    } // formatDate

    public static String formatDollar(Object obj) {
        // null gets converted to empty string
        if (obj == null) {
            return "";
        }
        BigDecimal bd = (BigDecimal) obj;
        try {
            DecimalFormat intFormat = new DecimalFormat("$###,###,###,##0.00");
            return intFormat.format(bd);
        } catch (Exception e) {
            return "bad Dollar Amount in FormatUtils:" + obj.toString() + " Error:" + e.getMessage();
        }
    } // formatDollar

    public static String formatInteger(Object obj) {
        if (obj == null) {
            return "";
        } else {
            try {
                Integer ival = (Integer) obj;
                DecimalFormat intFormat = new DecimalFormat("###,###,###,##0");
                return intFormat.format(ival);
            } catch (Exception e) {
                return "bad Integer in FormatUtils:" + obj.toString() + " Error:" + e.getMessage();
            }
        }
    } // formatInteger

    // plainInteger returns integer converted to string with no commas.
    public static String plainInteger(Object obj) {
        if (obj == null) {
            return "";
        } else {
            try {
                Integer ival = (Integer) obj;
                return ival.toString();
            } catch (Exception e) {
                return "bad Integer in FormatUtils:" + obj.toString() + " Error:" + e.getMessage();
            }
        }
    } // formatInteger

    // this is not really formatting, but just converting to string type.
    public static String formatString(Object obj) {
        if (obj == null) {
            return "";
        } else {
            return (String) obj;
        }
    } // formatString

} // FormatUtils class
