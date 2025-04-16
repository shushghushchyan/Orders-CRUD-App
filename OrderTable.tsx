'use client';
import React from 'react';

const OrderTable: React.FC = () => {

  return (
    <div className="w-full">
      <table className="border-2 border-amber-600">
        <thead>
          <tr>
            <th>Մակնիշը կամ Թագ</th>
            <th>Ասեղնագործվող ազգանունը</th>
            <th>Ասեղնագործվող համարանիշը</th>
            <th>Գույնը</th>  
            <th>Բարձիկի տեսակը</th>
            <th>Հեռախոսահամար</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <select className="w-full border rounded p-1 focus:outline-none">
                <option value="">Ընտրել մակնիշը</option>
                <option value="Toyota">Թագ</option>
                <option value="Toyota">Toyota</option>
                <option value="Lexus">Lexus</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Kia">Kia</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="BMW">BMW</option>
                <option value="Audi">Audi</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Nissan">Nissan</option>
                <option value="Mazda">Mazda</option>
                <option value="Honda">Honda</option>
                <option value="Mitsubishi">Mitsubishi</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Ford">Ford</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Opel">Opel</option>
                <option value="Peugeot">Peugeot</option>
                <option value="Renault">Renault</option>
                <option value="Skoda">Skoda</option>
                <option value="Subaru">Subaru</option>
                <option value="Jeep">Jeep</option>
                <option value="Infiniti">Infiniti</option>
              </select>
            </td>
            <td><input type="text" className="w-full border rounded p-1 focus:outline-none placeholder:text-gray-400" placeholder="Ազգանուն" /></td>
            <td><input type="text" className="w-full border rounded p-1 focus:outline-none placeholder:text-gray-400" placeholder="Համարանիշ" /></td>
            <td>
              <input 
                list="product-color" 
                placeholder="Ընտրել գույնը" 
                className="w-full border rounded p-1 focus:outline-none placeholder:text-gray-400"
              />
              <datalist id="product-color">
                <option value="Սև" />
                <option value="Մոխրագույն" />
                <option value="Բեժ" />
                <option value="Շագանակագույն" />
              </datalist>
            </td>  
            <td>
              <input 
                list="product-types" 
                placeholder="Ընտրել տեսակ" 
                className="w-full border rounded p-1 focus:outline-none placeholder:text-gray-400"
              />
              <datalist id="product-types">
                <option value="Ճամփորդական" />
                <option value="Ամրացվող" />
                <option value="Քառակուսի 35x35 սմ" />
                <option value="Քառակուսի 40x40 սմ" />
              </datalist>
            </td>
            <td>
              <input 
                type="number"  
                placeholder="ձևաչափը՝ 077777777" 
                className="w-full border rounded p-1 focus:outline-none placeholder:text-gray-400"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className="mt-4 bg-amber-600 text-white px-4 py-2 rounded"
      >
        Գրանցել և ուղարկել
      </button>
    </div>
  );
};

export default OrderTable;
