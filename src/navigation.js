import { authRoles } from './auth/authRoles'

export const navigations = [
    {
        name: 'addProduct',
        path: '/addProduct',
        icon: 'dashboard',
    },
    {
        label: 'Administrator',
        type: 'label',
    },
    {
        name: '',
        icon: 'security',
        path: '/security',
        auth: ["ROLE_ADMIN"]
    },
    {
        label: 'Modules',
        type: 'label',
    },
    {
        name: 'Integration',
        icon: 'settings_input_component',
        path: '/integration',
    },
    {
        name: 'Messages',
        icon: 'cloud_download',
        path: '/messages',
    },
    {
        name: 'Workflows',
        icon: 'gavel',
        path: '/workflow',
    },
    {
        name: 'Reconciliation',
        icon: 'domain',
        path: '/reconciliation',
    },
    {
        name: 'Notification',
        icon: 'mail',
        path: '/notification',
    },
]


export const NAVIGATION_MENUS = {
    security: [
        {
            key: 'users',
            label: 'Users',
            to: '/security/user'
        },
        {
            key: 'roles',
            label: 'Roles',
            to: '/security/role'
        },
        {
            key: 'privileges',
            label: 'Privileges',
            to: '/security/privilege'
        },
    ],

    integration: [
        {
            key: 'application',
            label: 'Applications',
            to: '/integration/applications'
        },
        {
            key: 'channels',
            label: 'Channels',
            subMenus: [
                {
                    key: 'queues',
                    label: 'Queues',
                    to: '/integration/queue'
                },
                {
                    key: 'ftps',
                    label: 'FTPS',
                    to: '/integration/ftps'
                },
                {
                    key: 'rest',
                    label: 'Rest',
                    to: '/integration/rest'
                }
            ],
        }
    ],

    notification: [
        {
            key: 'sent-messages',
            label: 'Sent Messages',
            to: '/notification/sent-messages'
        },
        {
            key: 'notifications',
            label: 'Notifications',
            subMenus: [
                {
                    key: 'email-templates',
                    label: 'Email Templates',
                    to: '/notification/email-templates'
                },
                {
                    key: 'mailing-groups',
                    label: 'Mailing Groups',
                    to: '/notification/mailing-groups'
                }
            ],
        }
    ],

    reconciliation:  [
        {
            key: 'nostro',
            label: 'Nostro Monitor',
            subMenus: [
                {
                    key: 'accounts',
                    label: 'Nostro Accounts',
                    to: '/reconciliation/nostro-accounts'
                },
                {
                    key: 'history',
                    label: 'Transaction History',
                    to: '/reconciliation/history'
                }
            ],
        },
        {
            key: 'matching',
            label: 'Message Matching',
            subMenus: [
                {
                    key: 'matching-rules',
                    label: 'Matching Rules',
                    to: '/reconciliation/matching-rules'
                },
                {
                    key: 'matched-msgs',
                    label: 'Matched Messages',
                    to: '/reconciliation/matched-messages'
                }
            ],
        },
        {
            key: 'chaining',
            label: 'Message Chaining',
            subMenus: [
                {
                    key: 'chaining-rules',
                    label: 'Chaining Rules',
                    to: '/reconciliation/chaining-rules'
                },
                {
                    key: 'chained-msgs',
                    label: 'Chained Messages',
                    to: '/reconciliation/chaining-messages'
                }
            ],
        }
    ],

    swiftManager:  [
        {
            key: 'io-audit',
            label: 'I/O Audit',
            to: '/messages/io-audit'
        },
        {
            key: 'incoming-msgs',
            label: 'Incoming Messages',
            subMenus: [
                {
                    key: 'in-manage',
                    label: 'Manage',
                    to: '/messages/flowdesigner'
                },
                {
                    key: 'in-pending',
                    label: 'Pending Tasks',
                    to: '/messages/taskmanager'
                },
                {
                    key: 'in-related',
                    label: 'Related Messages',
                    to: '/messages/processmanager'
                }
            ],
        },
        {
            key: 'outgoing-msgs',
            label: 'Outgoing Messages',
            subMenus: [
                {
                    key: 'out-manage',
                    label: 'Manage',
                    to: '/messages/flowdesigner'
                },
                {
                    key: 'out-pending',
                    label: 'Pending Tasks',
                    to: '/messages/taskmanager'
                },
                {
                    key: 'out-related',
                    label: 'Related Messages',
                    to: '/messages/processmanager'
                }
            ],
        }
    ],

    workflow:  [
        {
            key: 'pending-tasks',
            label: 'Pending Tasks',
            to: '/workflow/pending-tasks'
        },
        {
            key: 'msg-orch',
            label: 'Message Orchestration',
            subMenus: [
                {
                    key: 'flow-design',
                    label: 'Flow Designer',
                    to: '/workflow/flowdesigner'
                },
                {
                    key: 'task-man',
                    label: 'Task Manager',
                    to: '/workflow/taskmanager'
                },
                {
                    key: 'process-man',
                    label: 'Process Manager',
                    to: '/workflow/processmanager'
                }
            ],
        }
    ],
}