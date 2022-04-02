var student_name_array = [];

function submit() {

    var display_student_array = [];

    for (var j = 1; j <= 4; j++) {
        var names_of_students = document.getElementById("name_of_the_student_" + j).value;
        console.log(names_of_students);
        student_name_array.push(names_of_students);
    }

    var length_of_array = student_name_array.length;

    for (var k = 0; k < length_of_array; k++) {
        display_student_array.push("<h4>NAME - " + student_name_array[k] + "</h4>");
        console.log(display_student_array);

    }

    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;

    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {
    student_name_array.sort();
    var display_student_array_sorting = [];

    var length_of_array = student_name_array.length;

    for (var k = 0; k < length_of_array; k++) {
        display_student_array_sorting.push("<h4>NAME - " + student_name_array[k] + "</h4>");
        console.log(display_student_array_sorting);

    }

    var remove_commas = display_student_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}