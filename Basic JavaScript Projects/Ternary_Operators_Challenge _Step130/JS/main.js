function Age_check() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age > 17) ? "You are old enough":"You are not old enough";
    document.getElementById("Age_Verdict").innerHTML = Can_vote + " to vote";
}