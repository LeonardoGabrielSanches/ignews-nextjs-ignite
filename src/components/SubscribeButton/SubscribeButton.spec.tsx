import { render, screen, fireEvent } from '@testing-library/react';
import { useSession, signIn } from 'next-auth/client'
import { mocked } from 'ts-jest/utils';
import { useRouter } from 'next/router'
import { SubscribeButton } from '.';

jest.mock('next/router')

jest.mock('next-auth/client')

describe('SubscribeButton component', () => {
    it('renders correctly', () => {
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValueOnce([null, false])

        render(<SubscribeButton />);

        expect(screen.getByText('Subscribe now')).toBeInTheDocument();
    })

    it('redirects user to sign in when not authenticated', () => {
        const useSessionMocked = mocked(useSession)
        const signInMocked = mocked(signIn)

        useSessionMocked.mockReturnValueOnce([null, false])

        render(<SubscribeButton />);

        const subscribeButton = screen.getByText('Subscribe now');

        fireEvent.click(subscribeButton)

        expect(signInMocked).toHaveBeenCalled()
    })

    it('redirects to posts when user already has subscription', () => {
        const userRouterMocked = mocked(useRouter)
        const useSessionMocked = mocked(useSession)
        const pushMock = jest.fn()

        useSessionMocked.mockReturnValueOnce([
            {
                user: {
                    name: 'John Doe',
                    email: 'johndoe@example.com',
                },
                activeSubscription: 'fake-active',
                expires: 'fake-expires'
            },
            false
        ])

        userRouterMocked.mockReturnValueOnce({
            push: pushMock
        } as any)

        render(<SubscribeButton />);

        const subscribeButton = screen.getByText('Subscribe now');

        fireEvent.click(subscribeButton)

        expect(pushMock).toHaveBeenCalledWith('/posts')
    })
})