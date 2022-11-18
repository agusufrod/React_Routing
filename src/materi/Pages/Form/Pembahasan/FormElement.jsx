import React from 'react';

export default class FormElement extends React.Component {
  state = {
    nama: '',
    jurusan: '',
    gender: '',
    alamat: '',
    member: 'false',
  };

  handelSubmit = (e) => {
    e.preventDefault();
    alert(`
    nama: ${this.state.nama}
    jurusan: ${this.state.jurusan}
    gender: ${this.state.gender}
    alamat: ${this.state.alamat}
    member: ${this.state.member ? 'YES' : 'NO'}
    `);
    this.setState({
      nama: '',
      jurusan: '',
      gender: '',
      alamat: '',
      member: 'false',
    });
  };

  render() {
    return (
      <div style={{ margin: '100px auto', border: '1px solid gray', padding: '30px' }}>
        <form onSubmit={this.handelSubmit}>
          <label>
            Nama : <input type="text" name="nama" onChange={(e) => this.state({ nama: e.target.value })} />
          </label>
          <br />
          <label>
            Jurusan :
            <select name="jurusan" onChange={(e) => this.state({ jurusan: e.target.value })}>
              <option value="">Pilih Jurusan</option>
              <option value="Teknik Informatika">Teknik Informatika</option>
              <option value="sistem Informasi">Sistem Informasi</option>
              <option value="Desain Visual">Desain Visual</option>
            </select>
          </label>
          <br />
          <label>
            Jenis Kelamin :
            <input type="radio" value="laki-laki" name="gender" onChange={(e) => this.state({ gender: e.target.value })} /> Laki - Laki
            <input type="radio" value="Perempuan" name="gender" onChange={(e) => this.state({ gender: e.target.value })} /> Perempuan
          </label>
          <br />
          <label>
            Alamat : <textarea cols="30" rows="10" name="alamat" onChange={(e) => this.state({ alamat: e.target.value })} />
          </label>
          <br />
          <label>
            Member : <input type="checkbox" checked={this.state.member} name="member" onChange={(e) => this.state({ member: e.target.checked })} />
          </label>
          <br />
          <br />
          <button type="submit">Kirim</button>
        </form>
      </div>
    );
  }
}
