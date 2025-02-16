// Fungsi untuk mengurutkan potongan domino berdasarkan jumlah angka
export const sortDominoes = (dominoes, order = "asc") => {
  // Fungsi untuk membandingkan dua potongan domino
  const compare = (a, b) => {
    // Menghitung jumlah angka dalam setiap potongan domino
    const sumA = a.reduce((acc, val) => acc + val, 0);
    const sumB = b.reduce((acc, val) => acc + val, 0);

    // Jika jumlahnya sama, urutkan berdasarkan angka pertama
    if (sumA === sumB) {
      return order === "asc" ? a[0] - b[0] : b[0] - a[0];
    }

    // Urutkan berdasarkan jumlah angka
    return order === "asc" ? sumA - sumB : sumB - sumA;
  };

  // Mengembalikan array domino yang sudah diurutkan
  return [...dominoes].sort(compare);
};

// Fungsi untuk menghitung jumlah potongan domino yang memiliki angka ganda
export const countDoubleNumber = (dominoes) => {
  let count = 0; // Inisialisasi penghitung

  // Iterasi melalui setiap potongan domino
  for (const [left, right] of dominoes) {
    // Jika angka di kedua sisi sama, tambahkan ke penghitung
    if (left === right) {
      count++;
    }
  }

  // Mengembalikan jumlah potongan domino yang memiliki angka ganda
  return count;
};

// Fungsi untuk menghapus potongan domino yang duplikat
export const removeDuplicates = (dominoes) => {
  const seen = new Set(); // Set untuk melacak potongan yang sudah dilihat

  // Mengembalikan array domino yang hanya berisi potongan unik
  return dominoes.filter(([a, b]) => {
    // Membuat kunci untuk potongan domino
    const key = a < b ? `${a}-${b}` : `${b}-${a}`;
    // Jika kunci sudah ada di Set, berarti duplikat
    if (seen.has(key)) {
      return false; // Hapus potongan ini
    }
    seen.add(key); // Tambahkan kunci ke Set
    return true; // Simpan potongan ini
  });
};
// Fungsi untuk membalik setiap potongan domino
export const flipDominoes = (dominoes) => {
  const flipped = []; // Array untuk menyimpan potongan yang dibalik

  // Iterasi melalui setiap potongan domino
  for (const [left, right] of dominoes) {
    // Tambahkan potongan yang dibalik ke array
    flipped.push([right, left]);
  }

  // Mengembalikan array potongan domino yang sudah dibalik
  return flipped;
};

// Fungsi untuk menghapus potongan domino yang memiliki jumlah tertentu
export const removeCardsWithTotal = (dominoes, totalToRemove) => {
  const filteredDominoes = []; // Array untuk menyimpan potongan yang tidak dihapus

  // Iterasi melalui setiap potongan domino
  for (const [left, right] of dominoes) {
    // Jika jumlah angka tidak sama dengan total yang ingin dihapus
    if (left + right !== totalToRemove) {
      // Tambahkan potongan ini ke array hasil
      filteredDominoes.push([left, right]);
    }
  }

  // Mengembalikan array potongan domino yang sudah difilter
  return filteredDominoes;
};
