import { createClient } from
'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://blvcukwxmklglcdubmje.supabase.co';

const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_pzGke9tTXUQpfTAuXSL2Dw_b5BmgU8z';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
