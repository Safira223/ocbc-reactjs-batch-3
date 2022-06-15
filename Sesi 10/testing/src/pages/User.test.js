import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Users from './Users';

test(
    // param 1 -- deskripsi dari testing
    'should render and fetch users data', 
    // param 2 -- function untuk testing yang dilakukan
    async () => { 
        render(
            <MemoryRouter>
                <Users />
            </MemoryRouter>
        );
        
        // EXPECT 1 - kita cari dan cek tombol pada halaman
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Back to Home');

        // EXPECT 2 - kita pastikan fetch-nya sudah berjalan
        const user = await waitFor(
            // kita eksekusi function-nya
            () => {
                return screen.findByText('Leanne Graham');
            },
            // setelah kita set timeout-nya di sini,yang ini sebagai option-nya
            {
                timeout: 4000 // 4 detik
            }
        );
        expect(user).toBeInTheDocument();
    }
);