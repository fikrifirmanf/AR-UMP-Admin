import { ToastrService } from "ngx-toastr";
import { Injectable } from "@angular/core";

@Injectable()
export class FormToastrService {
  constructor(public toastr: ToastrService) {}

  // Success Type
  typeSuccess() {
    this.toastr.success("Data berhasil disimpan!", "Sukses!");
  }

  //   On delete
  typeDelete() {
    this.toastr.success("Data berhasil dihapus", "Sukses!");
  }

  // Success Type
  typeInfo() {
    this.toastr.info(
      "We do have the Kapua suite available.",
      "Turtle Bay Resort"
    );
  }

  // Success Type
  typeWarning() {
    this.toastr.warning(
      "Belum di konversi ke Image, silahkan klik Get Image !"
    );
  }

  // Success Type
  typeError() {
    this.toastr.error("Data gagal disimpan, coba periksa kembali", "Gagal");
  }
  // Success Type
  typeLoginfailed() {
    this.toastr.error("Username atau password salah!", "Gagal");
  }
  // Success Type
  typeLoginSuccess() {
    this.toastr.success("Login berhasil", "Sukses");
  }
  // Error stock
  typeErrorStock() {
    this.toastr.error(
      "Input transaksi gagal, stock tersedia kurang dari stok yang diinput, silahkan cek ulang!",
      "Gagal"
    );
  }
  typeErrorUsername() {
    this.toastr.error(
      "Username sudah ada, harap pakai username yang lain",
      "Gagal"
    );
  }
  // Success Type
  typeAuthFailed() {
    this.toastr.error("Login gagal! Username atau Password Salah!");
  }

  // Custom Type
  typeCustom() {
    this.toastr.success(
      '<span class="text-danger">Message in red.</span>',
      null,
      { enableHtml: true }
    );
  }

  //Progress bar
  progressBar() {
    this.toastr.info(
      "We do have the Kapua suite available.",
      "Turtle Bay Resort",
      { progressBar: true }
    );
  }

  // Timeout
  timeout() {
    this.toastr.error(
      "I do not think that word means what you think it means.",
      "Timeout!",
      { timeOut: 2000 }
    );
  }

  //Dismiss toastr on Click
  dismissToastOnClick() {
    this.toastr.info(
      "We do have the Kapua suite available.",
      "Turtle Bay Resort",
      { tapToDismiss: true }
    );
  }
  // Remove current toasts using animation
  clearToast() {
    this.toastr.clear();
  }

  // Show close button
  showCloseButton() {
    this.toastr.info("Have fun storming the castle!", "Miracle Max Says", {
      closeButton: true,
    });
  }
  // Enable  HTML
  enableHtml() {
    this.toastr.info(
      "<i>Have fun <b>storming</b> the castle!</i>",
      "Miracle Max Says",
      { enableHtml: true }
    );
  }
  // Title Class
  titleClass() {
    this.toastr.info("Have fun storming the castle!", "Miracle Max Says", {
      titleClass: "h3",
    });
  }
  // Message Class
  messageClass() {
    this.toastr.info("Have fun storming the castle!", "Miracle Max Says", {
      messageClass: "text-uppercase",
    });
  }
}
