/**
 * Pastikan fungsi showDownload sudah bentuk arrow function
 */
const showDownload = (result) => {
    console.log("Download selesai");
    console.log(`Hasil Download: ${result}`);
  }

  /**
   * Buat Promise baru didalam fungsi download yang menerima parameter resolve
	 * Hapus parameter showDownload dari function download
   */
  const download = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       const result = "Mongo DB Compass";
     resolve(result);
      }, 3000);
    })
   }

   /**
   * Buat function main yang memanggil fungsi async
	 * Panggil showDownload dan beri parameter download untuk menunggu download selesai
	 * Panggil fungsi main
   */

const main = async () => {
    try {
      showDownload(await download());
    } catch (error) {
      console.error("Error during download:", error);
    }
  };
  
  main();