using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ProyectosZec.Kairos
{
    public partial class HorasExtraConsumidasEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ProyectosZec.Kairos.HorasExtraConsumidasEditor";

        public HorasExtraConsumidasEditorAttribute()
            : base(Key)
        {
        }
    }
}

