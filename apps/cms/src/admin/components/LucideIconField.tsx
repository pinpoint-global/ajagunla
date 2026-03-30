import * as React from 'react';

import { Box, Button, Flex, TextInput, Typography } from '@strapi/design-system';
import * as Dialog from '@radix-ui/react-dialog';
import * as LucideIcons from 'lucide-react';
import { Check, Search, X } from 'lucide-react';
import {
  DIVISION_ICON_GROUPS,
  type DivisionIconName,
  isDivisionIconName,
} from '@ajagunla/shared';
import { useField as useFormField } from '@strapi/strapi/admin';

type LucideIconComp = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & { title?: string } & React.RefAttributes<SVGSVGElement>
>;

function IconGlyph({
  name,
  className,
}: {
  name: DivisionIconName;
  className?: string;
}) {
  const Icon = LucideIcons[name] as LucideIconComp | undefined;
  if (!Icon) return null;
  return <Icon width={20} height={20} className={className} aria-hidden />;
}

export interface LucideIconFieldProps {
  name: string;
  attribute: { type: string };
  disabled?: boolean;
  required?: boolean;
}

export const LucideIconField = React.forwardRef<HTMLButtonElement, LucideIconFieldProps>(
  ({ name, disabled }, ref) => {
    const field = useFormField<string | undefined>(name);
    const [open, setOpen] = React.useState(false);
    const [query, setQuery] = React.useState('');
    const searchRef = React.useRef<HTMLInputElement>(null);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const value = field.value;
    const selected = value && isDivisionIconName(value) ? value : undefined;

    const groupsToShow = React.useMemo(() => {
      const q = query.trim().toLowerCase();
      if (!q) {
        return DIVISION_ICON_GROUPS.map(g => ({
          id: g.id,
          label: g.label,
          icons: [...g.icons],
        }));
      }
      return DIVISION_ICON_GROUPS.map(g => ({
        id: g.id,
        label: g.label,
        icons: g.icons.filter(n => n.toLowerCase().includes(q)),
      })).filter(g => g.icons.length > 0);
    }, [query]);

    React.useEffect(() => {
      if (open) {
        setQuery('');
        const t = window.setTimeout(() => searchRef.current?.focus(), 0);
        return () => window.clearTimeout(t);
      }
    }, [open]);

    React.useEffect(() => {
      if (!open || !selected) return;
      let inner = 0;
      const outer = window.requestAnimationFrame(() => {
        inner = window.requestAnimationFrame(() => {
          const root = scrollRef.current;
          if (!root) return;
          const el = root.querySelector(`[data-division-icon="${CSS.escape(selected)}"]`);
          el?.scrollIntoView({ block: 'center', behavior: 'instant' });
        });
      });
      return () => {
        window.cancelAnimationFrame(outer);
        window.cancelAnimationFrame(inner);
      };
    }, [open, selected, groupsToShow]);

    const handleSelect = (icon: DivisionIconName) => {
      field.onChange(name, icon);
      setOpen(false);
    };

    return (
      <Flex direction="column" alignItems="stretch" gap={1}>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <Button
              ref={ref}
              type="button"
              variant="secondary"
              disabled={disabled}
              fullWidth
              justifyContent="space-between"
              paddingLeft={3}
              paddingRight={3}
              paddingTop={2}
              paddingBottom={2}
              name={name}
              aria-label="Select Lucide icon">
              <Flex gap={2} alignItems="center" minWidth={0}>
                {selected ? (
                  <>
                    <IconGlyph name={selected} />
                    <Typography ellipsis>{selected}</Typography>
                  </>
                ) : (
                  <Typography textColor="neutral500">Choose icon…</Typography>
                )}
              </Flex>
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9998,
                background: 'rgba(0,0,0,0.45)',
              }}
            />
            <Dialog.Content
              style={{
                position: 'fixed',
                left: '50%',
                top: '50%',
                zIndex: 9999,
                transform: 'translate(-50%, -50%)',
                width: 'min(92vw, 640px)',
                maxHeight: 'min(90vh, 720px)',
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--color-neutral-0, #fff)',
                borderRadius: 8,
                border: '1px solid var(--color-neutral-150, #e0e0e0)',
                boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
                overflow: 'hidden',
              }}
              onOpenAutoFocus={e => e.preventDefault()}>
              <Flex
                padding={4}
                paddingBottom={3}
                direction="column"
                gap={3}
                alignItems="stretch"
                borderColor="neutral150"
                borderWidth="0 0 1px 0">
                <Flex justifyContent="space-between" alignItems="flex-start" gap={2}>
                  <Flex direction="column" gap={1} alignItems="flex-start">
                    <Dialog.Title asChild>
                      <Typography variant="beta" tag="h2">
                        Select icon
                      </Typography>
                    </Dialog.Title>
                    <Dialog.Description asChild>
                      <Typography variant="pi" textColor="neutral600" tag="p">
                        Icons are grouped by theme. Search filters all groups.
                      </Typography>
                    </Dialog.Description>
                  </Flex>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Close"
                      style={{
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        padding: 4,
                        lineHeight: 0,
                      }}>
                      <X width={18} height={18} />
                    </button>
                  </Dialog.Close>
                </Flex>
                <Box position="relative">
                  <Search
                    width={16}
                    height={16}
                    style={{
                      position: 'absolute',
                      left: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      opacity: 0.5,
                      pointerEvents: 'none',
                    }}
                  />
                  <TextInput
                    ref={searchRef}
                    placeholder="Filter by name…"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    aria-label="Filter icons"
                    style={{ paddingLeft: 36 }}
                  />
                </Box>
              </Flex>
              <Box
                ref={scrollRef}
                padding={3}
                overflow="auto"
                style={{ maxHeight: 'min(55vh, 480px)' }}
                role="listbox"
                aria-label="Icon options">
                {groupsToShow.length === 0 ? (
                  <Typography padding={4} textAlign="center" textColor="neutral500">
                    No icons match your search.
                  </Typography>
                ) : (
                  <Flex direction="column" gap={8} alignItems="stretch">
                    {groupsToShow.map(group => (
                      <Flex key={group.id} direction="column" gap={3} alignItems="stretch">
                        <Typography
                          variant="pi"
                          textColor="neutral600"
                          textTransform="uppercase"
                          fontWeight="bold"
                          tag="h3"
                          style={{
                            fontSize: 11,
                            borderBottom: '1px solid var(--color-neutral-150, #e8e8e8)',
                            paddingBottom: 6,
                            marginBottom: 0,
                            letterSpacing: '0.12em',
                          }}>
                          {group.label}
                        </Typography>
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(112px, 1fr))',
                            gap: 10,
                          }}>
                          {group.icons.map(iconName => {
                            const isSelected = selected === iconName;
                            return (
                              <button
                                key={iconName}
                                type="button"
                                data-division-icon={iconName}
                                role="option"
                                aria-selected={isSelected}
                                onClick={() => handleSelect(iconName)}
                                style={{
                                  position: 'relative',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  gap: 8,
                                  padding: 12,
                                  borderRadius: 12,
                                  border: isSelected
                                    ? '2px solid var(--color-primary600, #4945ff)'
                                    : '2px solid var(--color-neutral-150, #e8e8e8)',
                                  background: isSelected
                                    ? 'linear-gradient(180deg, rgba(73,69,255,0.14) 0%, rgba(73,69,255,0.06) 100%)'
                                    : 'var(--color-neutral-0, #fff)',
                                  boxShadow: isSelected
                                    ? '0 4px 14px rgba(73,69,255,0.2), 0 0 0 3px rgba(73,69,255,0.2)'
                                    : 'none',
                                  cursor: 'pointer',
                                  fontSize: 11,
                                  lineHeight: 1.2,
                                  textAlign: 'center',
                                  wordBreak: 'break-word',
                                  color: isSelected
                                    ? 'var(--color-primary600, #4945ff)'
                                    : 'var(--color-neutral-800, #32324d)',
                                  fontWeight: isSelected ? 600 : 400,
                                  transition: 'border 0.2s, box-shadow 0.2s, background 0.2s',
                                }}>
                                {isSelected ? (
                                  <span
                                    style={{
                                      position: 'absolute',
                                      right: -4,
                                      top: -4,
                                      width: 20,
                                      height: 20,
                                      borderRadius: '50%',
                                      background: 'var(--color-primary600, #4945ff)',
                                      color: '#fff',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
                                      border: '2px solid var(--color-neutral-0, #fff)',
                                    }}>
                                    <Check width={12} height={12} strokeWidth={3} />
                                  </span>
                                ) : null}
                                <IconGlyph name={iconName} />
                                <span>{iconName}</span>
                              </button>
                            );
                          })}
                        </div>
                      </Flex>
                    ))}
                  </Flex>
                )}
              </Box>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        {field.error ? (
          <Typography textColor="danger600" variant="pi">
            {field.error}
          </Typography>
        ) : null}
      </Flex>
    );
  }
);

LucideIconField.displayName = 'LucideIconField';
