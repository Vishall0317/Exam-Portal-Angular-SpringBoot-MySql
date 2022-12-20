import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private userService: UserService, private snackBar: MatSnackBar) {

  }

  public user = {
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    phone: ""
  };

  formSubmit = () => {

    console.log(this.user);
    if (this.user == null || this.user.username == "") {
      //alert("user is required!");
      this.snackBar.open("Username is required!", "OK", {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 3000,
      });
      return;
    }

    //adduser: userservice
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        console.log(data);
        //alert("success");

        // this.snackBar.open("Submitted Successfully!", "OK",{
        //   horizontalPosition: this.horizontalPosition,
        //   verticalPosition: this.verticalPosition,
        //   duration: 3000,
        // });

        Swal.fire("Successfully submitted!", "User id is: " + data.id, "success");
      },
      (error) => {
        console.log(error);
        //alert("something went wrong!");

        // this.snackBar.open("Something went wrong!", "OK",{
        //   horizontalPosition: this.horizontalPosition,
        //   verticalPosition: this.verticalPosition,
        //   duration: 3000,
        // });

        Swal.fire("Error!", "Submitted Successfully!", "error");
      }
    );
  };
}
