<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

const toast = useToast()

const fields: AuthFormField[] = [
    {
        name: 'first_name',
        type: 'text',
        label: 'First Name',
        placeholder: 'Enter your first name',
        required: true
    },
    {
        name: 'last_name',
        type: 'text',
        label: 'Last Name',
        placeholder: 'Enter your last name',
        required: true
    },    
    {
        name: 'email',
        type: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        required: true
    }, 
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Enter your password',
        required: true
    }, 
    {
        name: 'remember',
        label: 'Remember me',
        type: 'checkbox'
    }
]


const schema = z.object({
  first_name: z.string('First name is required'),
  last_name: z.string('Last name is required'),
  email: z.email('Invalid email'),
  password: z.string('Password is required').min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Submitted', payload)
}
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        :schema="schema"
        :fields="fields"
        title="Welcome!"
        icon="i-lucide-lock"
        @submit="onSubmit"
      >
        <template #description>
          Have an account? <ULink to="/login" class="text-primary font-medium">Login</ULink>.
        </template>
        <template #password-hint>
          <ULink to="#" class="text-primary font-medium" tabindex="-1">Forgot password?</ULink>
        </template>
        <template #validation>
          <UAlert color="error" icon="i-lucide-info" title="Error signing up" />
        </template>
        
      </UAuthForm>
    </UPageCard>
  </div>
</template>

