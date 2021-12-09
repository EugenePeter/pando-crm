
import { v4 as uuidv4 } from 'uuid';

export const application_data = {

}

export const application_config = {
    nav_menus: {
        config: {
            is_enabled: true,
            max_item: 4
        },
        items: [
            {
                application_name: 'Home',
                component_name: 'Home',
                application_id: `${uuidv4()}`,
                is_enabled: true,
            }
        ]
    }
}