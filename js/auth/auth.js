/**
 * DO NOT EDIT
 *
 * this script checks makes sure the dashboard is not assessible until a user logs in or signs up
 */

var activeUsers = JSON.parse(localStorage.getItem("activeUsers"));
var indexPage = "../../../index.html";

if (activeUsers == "" || activeUsers == null) {
  location.href = indexPage;
}
